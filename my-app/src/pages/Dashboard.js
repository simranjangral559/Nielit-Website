import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch feedback count
        const countResponse = await fetch('http://localhost:5000/api/feedback/count');
        const countData = await countResponse.json();
        if (countData.success) {
          setFeedbackCount(countData.total);
        }

        // Fetch feedback list
        const feedbackResponse = await fetch('http://localhost:5000/api/feedbacks');
        const feedbackData = await feedbackResponse.json();
        if (feedbackData.success) {
          setFeedbacks(feedbackData.feedbacks);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="display-5 bg-info">Welcome to the Dashboard</h1>
        </div>
      </div>

      <div className="row g-4 justify-content-center mb-5">
        {/* Feedback Count Card */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5 className="card-title">Total Feedbacks</h5>
              <p className="display-6 fw-bold">{feedbackCount}</p>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: `${Math.min(feedbackCount, 100)}%` }}
                  aria-valuenow={feedbackCount}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small className="text-muted">Feedback progress (max 100 shown)</small>
            </div>
          </div>
        </div>

        {/* Placeholder for another stat (optional) */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card shadow-sm text-center">
            <div className="card-body">
              <h5 className="card-title">Example Metric</h5>
              <p className="display-6 fw-bold">75%</p>
              <div className="progress" style={{ height: '10px' }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: '75%' }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small className="text-muted">Goal completion rate</small>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback List Section */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Recent Feedbacks</h3>
            </div>
            <div className="card-body">
              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : feedbacks.length === 0 ? (
                <p className="text-center text-muted">No feedbacks available</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Feedback</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feedbacks.map((feedback, index) => (
                        <tr key={index}>
                          <td>{feedback.name}</td>
                          <td>{feedback.email}</td>
                          <td>{feedback.feedback}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;