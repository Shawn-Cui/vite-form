/*
 * @Author: cuitao
 * @Date: 2021-03-01 17:54:12
 * Formik 版本
 */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, '最多只能填写15个字符')
          .required('必填'),
        lastName: Yup.string()
          .max(20, '最多只能填写20个字符')
          .required('必填'),
        email: Yup.string()
          .email('不合法的邮箱格式')
          .required('必填'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        });
      }}
    >
      <Form>
        <label htmlFor="firstName">姓氏</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">名称</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">邮箱</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <button type="submit">提交</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;