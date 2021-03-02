/*
 * @Author: cuitao
 * @Date: 2021-03-01 17:54:12
 * Formik 版本
 */
import React from 'react';
import { useFormik } from 'formik';

const validate = (values: any) => {
  const errors: any = {};
  if (!values.firstName) {
    errors.firstName = '必填';
  } else if (values.firstName.length > 15) {
    errors.firstName = '最多只能填写15个字符';
  }

  if (!values.lastName) {
    errors.lastName = '必填';
  } else if (values.firstName.length > 20) {
    errors.firstName = '最多只能填写20个字符';
  }

  if (!values.email) {
    errors.email = '必填';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '不合法的邮箱格式';
  }

  return errors;
}

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">姓氏</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">名称</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">邮箱</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">提交</button>
    </form>
  );
};

export default FormikForm;