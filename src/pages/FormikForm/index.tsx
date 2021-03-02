/*
 * @Author: cuitao
 * @Date: 2021-03-01 17:54:12
 * Formik 版本
 */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, '最多只能填写15个字符')
        .required('必填'),
      lastName: Yup.string()
        .max(20, '最多只能填写20个字符')
        .required('必填'),
      email: Yup.string()
        .email('不合法的邮箱格式')
        .required('必填'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">姓氏</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">名称</label>
      <input
        id="lastName"
        type="text"
        {...formik.getFieldProps('lastName')}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">邮箱</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">提交</button>
    </form>
  );
};

export default FormikForm;