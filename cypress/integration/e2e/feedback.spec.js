import FeedbackPage from '../../page-objects/pages/FeedbacPage';

describe('Feedback Test using Fixtures', () => {
  before(function () {
    FeedbackPage.load();
  });

  it('should submit feedback form', () => {
    FeedbackPage.submitFeedback();
  });
});
