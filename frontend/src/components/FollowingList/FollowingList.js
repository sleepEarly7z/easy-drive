import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function FollowingList( { showProp }) {
    const [showList, setShow] = useState(false);
    const [followingList, setFollowingList] = useState([]);
    const [followingList2, setFollowingList2] = useState([]);
    var followingList3 = [1,2,3];
    

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }



    useEffect (() => {
        async function mapIDtoName (temp2) {
            let instID = [];

            // const res = await axios.get(`http://localhost:3001/instructors/${temp2[1]}`);
            // console.log(res)
            // console.log(followingList2)
            // followingList.push(res.data.data);
            axios.all(temp2.map(async (id) => {
                const res = await axios.get(`http://localhost:3001/instructors/${id}`);
                console.log(res)
                followingList.push(res.data.data);
                console.log(followingList)
            }
            ));
            return followingList;
        }


        async function sendGet () {
          await axios.get('http://localhost:3001/students/62d761535c08a0f631db58a0')
          .then ((res) => {
            mapIDtoName(res.data.data.followedInstructors)
            .then ((result) => {
                console.log(result);
                console.log(followingList);
                return 1;
            }) .then ((res) => {
                console.log(res);
            })
          })
        }
        sendGet();
      },[]);
  
    return (
        showProp && (
            <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={showList} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Following</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ol>
                <li>
                    {followingList[0].first_name == undefined ? "" : followingList[0].first_name}
                </li>
                <li>
                    {followingList[1].first_name == undefined ? "" : followingList[1].first_name}
                </li>
            </ol></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Go back
            </Button>
          </Modal.Footer>
        </Modal>
      </>
        )
      
    );
}