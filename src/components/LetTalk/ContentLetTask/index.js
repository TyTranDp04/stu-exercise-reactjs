import React from "react";
import {
  BodyForm,
  Container,
  Content,
  Error,
  FooterForm,
  Form,
  H1,
  Header,
  HeaderForm,
  Input,
  Label,
  Link,
  Row,
  Submit,
  Text,
  TextArea,
} from "./style";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const ContentLetTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const MySwal = withReactContent(Swal);
  return (
    <Container className="container-fluid bg-white">
      <Row className="container">
        <Header className="col-12 text-start">
          <div>
            <Text>
              <Link href="/">Home</Link> &#62; let's talk
            </Text>
          </div>
          <H1>Let't talk</H1>
        </Header>
        <BodyForm className="row">
          <Form className="col-lg-8 col-md-12">
            <HeaderForm className="text-start ">
              <Text>
                <strong>ST United</strong>: is always glad to hear your comments
                regarding our services. Whether you have any questions, or wish
                to get a quote for your project, or require further information
                about what we can offer you, please do not hesitate to contact
                us
              </Text>
            </HeaderForm>
            <FooterForm
              className="text-start"
              onSubmit={handleSubmit((data) => {
                Swal.fire({
                  title: "Are you sure sent information?",
                  icon: "question",
                  iconHtml: "?",
                  confirmButtonText: "OK",
                  cancelButtonText: "Cancel",
                  showCancelButton: true,
                  showCloseButton: true,
                }).then((result) => {
                  if (result.isConfirmed) {
                    reset();
                    Swal.fire("Nice to meet you", "", "success");
                  } else Swal.fire(" Cancelled", "", "error");
                });
              })}
            >
              <div>
                <Label className="w-100">Your Name</Label>
                <Input
                  {...register("YourName", {
                    required: "The field is required.",
                  })}
                  className="w-100"
                />
                <Error className="w-100">{errors.YourName?.message}</Error>
              </div>
              <div>
                <Label className="w-100">Your Email</Label>
                <Input
                  type="email"
                  {...register("YourEmail", {
                    required: "The field is required.",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Email Invalid",
                    },
                  })}
                  className="w-100"
                />
                <Error className="w-100">{errors.YourEmail?.message}</Error>
              </div>
              <div>
                <Label className="w-100">Your Phone</Label>
                <Input
                  {...register("YourPhone", {
                    required: "The field is required.",
                    minLength: {
                      value: 10,
                      message: "your phone error Number = 10",
                    },
                  })}
                  className="w-100"
                />
                <Error className="w-100">{errors.YourPhone?.message}</Error>
              </div>
              <div>
                <Label className="w-100">Subject</Label>
                <Input
                  {...register("Subject", {
                    required: "The field is required.",
                  })}
                  className="w-100"
                />
                <Error className="w-100">{errors.Subject?.message}</Error>
              </div>
              <div>
                <Label className="w-100">Your Message</Label>
                <TextArea
                  {...register("Message", {
                    required: "The field is required.",
                  })}
                  className="w-100"
                ></TextArea>
                <Error>{errors.Message?.message}</Error>
              </div>
              <Submit value="Send" className="mt-2" type="submit" />
            </FooterForm>
            <div>
              <Label></Label>
            </div>
          </Form>
          <Content className="col-lg-4 col-md-12 text-start">
            <h4>Office</h4>
            <p>Address: Nomad Space, No.14 An Thuong 18, Danang, Vietnam</p>
            <p>Hotline: (+84) 777 463 183</p>
            <p>Email: hello(at)stunited.vn</p>
          </Content>
        </BodyForm>
      </Row>
    </Container>
  );
};

export default ContentLetTask;
