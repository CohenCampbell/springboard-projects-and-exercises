import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({items}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
              We have {items[0].length} diffrent snacks 
              and { items[1].length} diffrent drinks!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
