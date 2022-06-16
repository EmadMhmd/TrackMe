/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Button, FormGroup, Label, Input, FormFeedback, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import action from '../../../state/actions';
import IReport from '../../../interfaces/domain/report';
import IStore from '../../../interfaces/state';
import { IOrg } from '../../../interfaces/domain';

const { creatingReportAction, getAllOrgsAction } = action;

const initialValues: IReport = {
  name: '',
  orgId: '',
};

interface IProps {
    creatingReport : Function,
    getAllOrgs: Function,
    orgs: any,
    orgId:string;
}

function ReportModal({
  creatingReport, getAllOrgs, orgs, orgId,
}: IProps) {
  const [modal, setModal] = useState(false);
  async function toggle() {
    setModal(!modal);
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().typeError('Please Select shop Network !').required('Please Select shop Network !'),
  });

  useEffect(() => {
    getAllOrgs();
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: async (values: IReport) => {
      await creatingReport({ ...values, orgId: orgId || values.orgId });
      toggle();
    },
  });

  return (
    <div>
      <Button onClick={toggle} className={orgId ? 'btn groupBtn' : 'btn add'}>Reporting</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Reporting</ModalHeader>
        <ModalBody>
          <div>
            <form
              onSubmit={formik.handleSubmit}
            >
              <FormGroup>
                <Label>Name</Label>
                <Input
                  placeholder="Enter Name"
                      //   invalid={formik.errors.name && formik.touched.name && formik.errors.name}
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />

                {formik.errors.name && formik.touched.name
                  ? (<FormFeedback>{formik.errors.name}</FormFeedback>)
                  : null}
              </FormGroup>

              {orgId ? <> </>
                : (
                  <FormGroup>
                    <Input
                      name="orgId"
                      type="select"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.orgId}
                    >
                      <option>Select Org</option>
                      {orgs.map((org: IOrg) => (
                        <option
                          value={org._id}
                          key={org._id}
                        >
                          {org.name}
                        </option>
                      ))}
                    </Input>

                    {formik.errors.name && formik.touched.name
                      ? (<FormFeedback>{formik.errors.name}</FormFeedback>)
                      : null}
                  </FormGroup>
                )}

              <ModalFooter>
                <Button className="modelBtn" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                  Create Report
                </Button>
                <Button className="modelBtn" color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </form>
          </div>
        </ModalBody>

      </Modal>
    </div>
  );
}

const mapStateToProps = ({ orgReducer }: IStore) => ({
  orgs: orgReducer.orgs,
});

export default connect(mapStateToProps, {
  creatingReport: creatingReportAction,
  getAllOrgs: getAllOrgsAction,
})(ReportModal);
