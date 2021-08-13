
// Display form field error messages
export const InputFeedback = ({ error }) => 
    error ? <div className="input-feedback">{error}</div> : null;