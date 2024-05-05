import { FunctionComponent } from "react";
import "./Confirmation.css";

const Confirmation: FunctionComponent = () => {
  return (
    <div className="confirmation">
      <div className="confirmation-child" />
      <div className="confirmation-item" />
      <main className="frame-parent">
        <section className="rectangle-parent">
          <div className="frame-child" />
          <div className="display-icon">
            <img
              className="pre-alpha-display-iconcheck"
              loading="lazy"
              alt=""
              src="/prealpha-display-iconcheck-mark.svg"
            />
            <div className="claim-submitted-for-kristin-da-wrapper">
              <div className="claim-submitted-for">
                Claim submitted for Kristin Davis
              </div>
            </div>
          </div>
          <div className="papers-icon">
            <div className="button">
              <div className="button1">
                <div className="minimum-width-placeholder" />
                <img className="left-icon" alt="" />
                <b className="text">Close</b>
                <img
                  className="right-icon"
                  loading="lazy"
                  alt=""
                  src="/right-icon.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="frame-wrapper">
          <div className="frame-group">
            <div className="rectangle-group">
              <div className="frame-item" />
              <div className="whats-next-for-your-employee-parent">
                <input
                  className="whats-next-for"
                  placeholder="What’s next for your employee and you:"
                  type="text"
                />
                <div className="secondary-actions" />
              </div>
              <div className="secondary-button">
                <div className="next-step-item">
                  <input
                    className="next-step-item-child"
                    checked={true}
                    type="radio"
                  />
                  <div className="text1">
                    <b className="an-optum-health">
                      An Optum health card has been emailed to your employee
                    </b>
                    <div className="this-card-is">{`This card is to be used for the initial treatment and first prescription fills in response to this incident. Your employee cannot use their standard health insurance card at this time, as applicable care in response to this incident will be handled uniquely by Optum at first. `}</div>
                  </div>
                </div>
                <div className="next-step-item1">
                  <input
                    className="next-step-item-item"
                    checked={true}
                    type="radio"
                  />
                  <div className="text2">
                    <b className="you-will-receive">
                      You will receive an email confirmation of this claim with
                      guidance on how to assist your employee.
                    </b>
                    <div className="your-employee-can">
                      Your employee can get medical care in this time. Provide
                      us with more information or updates on their healthcare
                      needs through customer support.
                    </div>
                  </div>
                </div>
                <div className="next-step-item2">
                  <input
                    className="next-step-item-inner"
                    checked={true}
                    type="radio"
                  />
                  <div className="text3">
                    <b className="the-claim-is">
                      The claim is being set up with the insurance carrier, and
                      additional information will be sent to your employee when
                      ready.
                    </b>
                    <div className="the-insurance-carrier">{`The insurance carrier will communicate directly with your employee once they have processed this claim. `}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-container">
              <div className="frame-inner" />
              <div className="more-assistance-wrapper">
                <b className="more-assistance">More assistance</b>
              </div>
              <div className="p-r-e-a-l-p-h-a-display-icon-parent">
                <div className="p-r-e-a-l-p-h-a-display-icon">
                  <div className="p-r-e-a-l-p-h-a-display-icon-child" />
                  <img
                    className="pre-alpha-display-iconpapers"
                    loading="lazy"
                    alt=""
                    src="/prealpha-display-iconpapers.svg"
                  />
                </div>
                <div className="button-wrapper">
                  <div className="button2">
                    <b className="text4">Guide to claims</b>
                  </div>
                </div>
              </div>
              <div className="frame-container">
                <img
                  className="group-icon"
                  loading="lazy"
                  alt=""
                  src="/group-13943.svg"
                />
                <div className="button-container">
                  <div className="button3">
                    <b className="text5">Contact support</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="action-footer-wrapper">
        <div className="action-footer">
          <div className="action-footer-content">
            <button className="secondary-actions1">
              <div className="secondary-button1">
                <div className="minimum-width-placeholder1" />
                <div className="button4">
                  <img className="left-icon1" alt="" />
                  <b className="text6">Back to review</b>
                  <img className="right-icon1" alt="" />
                </div>
              </div>
            </button>
            <button className="main-actions">
              <div className="tertiary-button">
                <div className="minimum-width-placeholder2" />
                <div className="button5">
                  <img className="left-icon2" alt="" />
                  <b className="text7">Cancel</b>
                  <img className="right-icon2" alt="" />
                </div>
              </div>
              <div className="primary-button">
                <div className="minimum-width-placeholder3" />
                <div className="button6">
                  <img className="left-icon3" alt="" />
                  <b className="text8">Close</b>
                  <img className="right-icon3" alt="" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
