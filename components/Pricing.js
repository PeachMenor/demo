const Pricing = () => {
  return (
    <div className="pricing">
      <span className="pricing__title">How it Works?</span>
      
      <div className="pricing-container">
          <div className="pricing-component">
            <div className="pricing-component__simple">
              <h2>Step 1</h2>
              <h2>Quick Body Scan</h2>
              <div className="image-container">
                <img src="/images/step1.png" alt="Quick Body Scan" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__webshop">
              <h2>Step 2</h2>
              <h2>Wardrobe Creation</h2>
              <div className="image-container">
                <img src="/images/step2.png" alt="Wardrobe Creation" />
              </div>
            </div>
          </div>
          <div className="pricing-component">
            <div className="pricing-component__custom">
              <h2>Step 3</h2>
              <h2>Outfit Generator</h2>
              <div className="image-container">
                <img src="/images/step3.png" alt="Outfit Generator" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pricing;
