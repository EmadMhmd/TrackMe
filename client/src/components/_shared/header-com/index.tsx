import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import OrgSearchBar from './orgSearchBar';
import GatheringModal from './gatheringModal';
import ReportModal from './reportModal';

function Header() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <h1 className="logo">COCA</h1>
      <OrgSearchBar />
      <Button className="btn add" onClick={() => navigate('/')}>Org List</Button>
      <GatheringModal />
      <ReportModal orgId="" />
    </div>
  );
}

export default Header;
