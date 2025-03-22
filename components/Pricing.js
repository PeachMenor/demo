const Pricing = () => {
  return (
    <div className="pricing">
      <span className="pricing__title">How it Works?</span>
      
      <div className="pricing-container">
          <div className="pricing-component">
            <div className="pricing-component__simple">
              <span>Step 1</span>
              <h2>Customization</h2>
              <div className="image-container">
                <img src="/images/step1.jpg" alt="customization" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__webshop">
              <span>Step 2</span>
              <h2>Try Measurement</h2>
              <div className="image-container">
                <img src="/images/step2.jpg" alt="body measurement" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__custom">
              <span>Step 3</span>
              <h2>Place Order</h2>
              <div className="image-container">
                <img src="/images/step3.jpg" alt="place order" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pricing;