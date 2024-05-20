import React from 'react';

const withAdditionalInfo = (WrappedComponent) => {
  return (props) => (
    <div>
      <WrappedComponent {...props} />
      <p>Additional Information</p>
    </div>
  );
};

const SimpleComponent = () => {
  return <p>This is a simple component.</p>;
};

const EnhancedComponent = withAdditionalInfo(SimpleComponent);

export default EnhancedComponent;
