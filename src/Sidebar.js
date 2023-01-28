import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import db from './firebase';
import { useStateValue } from './StateProvider';

import { Link } from 'react-router-dom';
function Sidebar() {

  const [channels, setChannels] = useState([]);
  const[{user}] = useStateValue();

  useEffect(() => {
    // Run this code when the sidebar components load
    db.collection('room').onSnapshot(snapshot => (
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
        )
    )
    );
  }, []);

  return (
    <div className="sidebar">
        <div className="sidebar_header">
        <div className="sidebar_info">    
        <h2>DevChat</h2>
        <h3>
            <FiberManualRecordIcon/>
            {user?.displayName}
        </h3>
        </div>
        <CreateIcon/>    
    </div>
    <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
    <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>

    <Link to="/news">
    <SidebarOption Icon={NewspaperIcon} title="News"/>
    </Link>
    
    <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
    <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
    <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
    <SidebarOption Icon={AppsIcon} title="Apps"/>
    <SidebarOption Icon={FileCopyIcon} title="FileBrowser"/>
    <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
    <hr/>
    <SidebarOption Icon={ExpandMoreIcon} title="Channels"  />
    <hr/>
    <SidebarOption Icon = {AddIcon} addChannelOption title = 'Add Channel' />

     {channels.map(channel => (
      <SidebarOption title={channel.name} id={channel.id} />
     ))}

    </div>
  );
}

export default Sidebar;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBJd3tfxowFlEqPnEd-gSQ-LTHvs1mONn8",
//   authDomain: "slack-cc0c5.firebaseapp.com",
//   projectId: "slack-cc0c5",
//   storageBucket: "slack-cc0c5.appspot.com",
//   messagingSenderId: "245243143180",
//   appId: "1:245243143180:web:737955a8c6244dc2bcba29"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);