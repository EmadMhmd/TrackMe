/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button, FormGroup, Label, Input, FormFeedback, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import action from '../../../state/actions';
// import {gatheringDataApi} from "../../api/indexApi"
import IGatheringFormData from '../../../interfaces/compnent/gtheringFormData';

const { gatheringDataAction } = action;

const initialValues: IGatheringFormData = {
  sub: 'www',
  domain: '',
  tld: 'com',
  crawolingTool: 'urlLib',
  crawolingDepth: -1,
  subCrawoling: false,
  inUrl: '',
  scrapingTool: 'pup',
  inDepth: -1,
  smScraping: false,
};

interface IProps {
    gatherData: Function
 }

function GatherModal({ gatherData }:IProps) {
  const [modal, setModal] = useState(false);
  async function toggle() {
    setModal(!modal);
  }
  const validationSchema = Yup.object().shape({
    // name: Yup.string().typeError('Please Select shop Network !')
    // .required('Please Select shop Network !'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: async (values: IGatheringFormData) => {
      await gatherData(values);
      toggle();
    },
  });

  return (
    <div>
      <Button onClick={toggle} className="btn add">Gathering</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Data Gathering</ModalHeader>
        <ModalBody>
          <div>
            <form
              onSubmit={formik.handleSubmit}
            >
              <div className="form">
                <FormGroup className="formInputThree">
                  <Label>Domain</Label>
                  <Input
                    placeholder="Enter sub domain"
                    //   invalid={errors.sub && touched.sub && errors.sub}
                    type="text"
                    name="sub"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sub}
                  />
                  {formik.errors.sub && formik.touched.sub
                    ? (<FormFeedback>{formik.errors.sub}</FormFeedback>)
                    : null}
                </FormGroup>
                <FormGroup className="formInputThree labelHeight">
                  <Input
                    placeholder="Enter SLD"
                    //   invalid={errors.domain && touched.domain && errors.domain}
                    type="text"
                    name="domain"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.domain}
                  />

                  {formik.errors.domain && formik.touched.domain
                    ? (<FormFeedback>{formik.errors.domain}</FormFeedback>)
                    : null}
                </FormGroup>
                <FormGroup className="formInputThree labelHeight">
                  <Input
                    placeholder="Enter TLD"
                    //   invalid={errors.tld && touched.tld && errors.tld}
                    type="text"
                    name="tld"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tld}
                  />

                  {formik.errors.tld && formik.touched.tld
                    ? (<FormFeedback>{formik.errors.tld}</FormFeedback>)
                    : null}
                </FormGroup>
                <FormGroup className="formInputTwo">
                  <Label>Crawoling Depth</Label>
                  <Input
                    placeholder="Enter Crawoling Depth"
                    //   invalid={errors.crawolingDepth
                    //     && touched.crawolingDepth
                    //     && errors.crawolingDepth}
                    type="number"
                    name="crawolingDepth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.crawolingDepth}
                  />

                  {formik.errors.crawolingDepth && formik.touched.crawolingDepth
                    ? (<FormFeedback>{formik.errors.crawolingDepth}</FormFeedback>)
                    : null}
                </FormGroup>
                <FormGroup className="formInputTwo">
                  <Label>crawoling Tool</Label>
                  <Input
                    type="select"
                    onChange={formik.handleChange}
                    name="crawolingTool"
                    value={formik.values.crawolingTool}
                  >
                    <option value="urlLib">URL Lib</option>
                    <option value="sele">Selenium</option>
                    <option value="pup">Puppetter</option>
                  </Input>
                </FormGroup>
                <FormGroup check className="formInputOne">
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={formik.handleChange}
                      name="subCrawoling"
                      value={formik.values.subCrawoling}
                    />
                    {' '}
                    Subdomains Crawoling
                  </Label>
                </FormGroup>
                <FormGroup check className="formInputOne">
                  <Label check>
                    <Input
                      type="checkbox"
                      onChange={formik.handleChange}
                      name="smScraping"
                      value={formik.values.smScraping}
                    />
                    {' '}
                    Socialmedia Scarping
                  </Label>
                </FormGroup>
                <FormGroup className="formInputTwo">
                  <Label>Linkedin</Label>
                  <Input
                    placeholder="Enter Linkedin URL"
                    //   invalid={errors.inUrl && touched.inUrl && errors.inUrl}
                    type="text"
                    name="inUrl"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.inUrl}
                  />

                  {formik.errors.inUrl && formik.touched.inUrl
                    ? (<FormFeedback>{formik.errors.inUrl}</FormFeedback>)
                    : null}
                </FormGroup>
                <FormGroup className="formInputTwo">
                  <Label>Scarping Depth</Label>
                  <Input
                    placeholder="Enter Scarping Depth"
                    type="number"
                    name="inDepth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.inDepth}
                  />

                  {formik.errors.inDepth && formik.touched.inDepth
                    ? (<FormFeedback>{formik.errors.inDepth}</FormFeedback>)
                    : null}
                </FormGroup>
                <FormGroup className="formInputTwo">
                  <Label>Scraping Tool</Label>
                  <Input
                    type="select"
                    onChange={formik.handleChange}
                    name="scrapingTool"
                    value={formik.values.scrapingTool}
                  >
                    <option value="sele">Selenium</option>
                    <option value="pup">Puppetter</option>
                  </Input>
                </FormGroup>
                <ModalFooter className="floatClear">
                  <Button className="modelBtn" type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                    Gathering Data
                  </Button>
                  <Button className="modelBtn" color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
              </div>
            </form>
          </div>
        </ModalBody>

      </Modal>
    </div>
  );
}

export default connect(null, { gatherData: gatheringDataAction })(GatherModal);
