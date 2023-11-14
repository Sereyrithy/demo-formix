import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = () => {
  console.log("submitted");
} 

const BasicForm = () => {
  const {
    values, 
    handleBlur, 
    handleChange,
    handleSubmit,
    errors,
    touched
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: basicSchema,
    onSubmit
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input 
      id="email" 
      type="email" 
      placeholder="Enter your email" 
      value={values.email} 
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
        <label htmlFor="age">Age</label>
      <input 
      id="age" 
      type="number" 
      placeholder="Enter your Age" 
      value={values.age} 
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}
       <label htmlFor="password">Password</label>
      <input 
      id="password" 
      type="password" 
      placeholder="Enter your Password" 
      value={values.password} 
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && <p className="error">{errors.password}</p>}
      <label htmlFor="confirmPassword">Confirm Password</label>
       <input 
      id="confirmPassword" 
      type="password" 
      placeholder="Confirm Password" 
      value={values.confirmPassword} 
      onChange={handleChange}
      onBlur={handleBlur}
      className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
      />
      {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;