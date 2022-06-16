import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Input, FormGroup } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import action from '../../../state/actions/index';

const { listingDataAction } = action;

 interface IProps {
    listData: Function
 }
interface IFormData {
name:string,
}

const initialValues: IFormData = {
  name: '',
};

function SearchBar({ listData }:IProps) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().typeError('Please Select shop Network !').required('Please Select shop Network !'),
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: async (values: IFormData) => {
      // Object(e).preventDefault();
      await listData(values.name);
      // const navigate = useNavigate();
      navigate('/org-data-list');
      // useHref('/org-data-list');
      // history.push('/org-data-list');
    },
  });

  return (

    <div>
      <form
        onSubmit={formik.handleSubmit}
      >
        <div className="search">
          <FormGroup className="searchInput">
            <Input
              placeholder="Enter Org Name"
                // invalid={errors.name && touched.name && errors.name}
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </FormGroup>
          <Button className="searchBtn" type="submit" disabled={!formik.isValid}>Search</Button>
        </div>
      </form>
    </div>

  );
}

export default connect(null, { listData: listingDataAction })(SearchBar);
