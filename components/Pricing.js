const Pricing = () => {
  return (
    <div className="pricing">
      <span className="pricing__title">How it Works?</span>
      
      <div className="pricing-container">
          <div className="pricing-component">
            <div className="pricing-component__simple">
              <span>Step 1: On Limited Apparel</span>
              <h2>Customization</h2>
              <div className="image-container">
                <img src="/images/step1.png" alt="customization" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__webshop">
              <span>Step 2: Body Measurements & Try ons</span>
              <h2>AI Scan via App</h2>
              <div className="image-container">
                <img src="/images/step2.png" alt="body measurement" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__custom">
              <span>Step 3: Place Order</span>
              <h2>Requisition</h2>
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