const Pricing = () => {
  return (
    <div className="pricing">
      <span className="pricing__title">How it Works?</span>
      
      <div className="pricing-container">
          <div className="pricing-component">
            <div className="pricing-component__simple">
              <span>Step 1: Customization</span>
              <h2>On Limited Apparel</h2>
              <div className="image-container">
                <img src="/images/step1.png" alt="customization" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__webshop">
              <span>Step 2: AI Scan via App</span>
              <h2>Body Measurements & Try ons</h2>
              <div className="image-container">
                <img src="/images/step2.png" alt="body measurement" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__custom">
              <span>Step 3: Place Order</span>
              <h2>Make a Purchase</h2>
              <div className="image-container">
                <img src="/images/step3.png" alt="place order" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pricing;