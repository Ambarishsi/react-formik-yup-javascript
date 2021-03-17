import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link } from "react-router-dom";

function FormiKYupBootstrap() {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.number().required(),
    terms: yup.bool().required().oneOf([true], "agree to the terms and conditions first"),
  });
  
  return (
    
    <div className="App">
      <Container fluid>
      <Row>
      <Col>
      <h2>React Bootstrap form validation using Formik and Yup</h2>
      <Formik
        validationSchema={schema}

        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          terms: false,
        }}
       
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (

          <Form noValidate onSubmit={handleSubmit} className="form-fields">
            <Form.Group md="" controlId="f.firstName" >
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="f.lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group  controlId="f.phone">
              <Form.Label>phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                  isValid={touched.phone && !errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
       
            </Form.Group>

            <Form.Group>
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                id="terms"
              />
            </Form.Group>
            <Button type="submit" variant="warning" >Submit form</Button>
          </Form>
        )}
      </Formik>
      </Col>
      </Row>
      <Row>
    
        <Col>
        <br/>
            <Link to="/FormikYupMaterial"><Button  variant="outline-danger">
              Go to second exapmle 
            </Button>
            </Link>
        </Col>

            <Col>
            <br/>
            <Link to="/OnlyFormik"><Button  variant="outline-danger">
              Go to third exapmle 
            </Button>
            </Link>
            </Col>
      </Row>
      </Container>
    </div>
  );
}

export default FormiKYupBootstrap;