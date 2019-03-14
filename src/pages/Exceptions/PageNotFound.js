import React from 'react';
// import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

const Page = () => {
  return (
    <div className="page-err-container">
      <div className="page-err">
        {/* <QueueAnim type="bottom" className="ui-animate"> */}
        <div key="1">
          <div className="err-container text-center">
            <div className="err-code-container">
              <div className="err-code"> <h1>400</h1> </div>
            </div>
            <h2>Sorry, page not found</h2>
            <Button href="/#">Go Back to Home Page</Button>
          </div>
        </div>
        {/* </QueueAnim> */}
      </div>
    </div>
  );
}

export default Page;