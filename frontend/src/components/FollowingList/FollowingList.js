import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

export default function FollowingList(props) {
    const { followedInstructors } = props;

    let navigate = useNavigate();

    const showInstructor = (id) => {
        navigate(`/showProfileRating/${id}`, { replace: true });
    }

    return (
        <>
            <Modal show={props.showBoolean} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Following</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {followedInstructors.map((x) => {
                            const labelId = `checkbox-list-secondary-label-${x.id}`;
                            return (
                                <ListItem key={x.id} disablePadding >
                                    <ListItemButton
                                        onClick={() => showInstructor(x.id)}
                                    >
                                        <ListItemAvatar>
                                            <Avatar src={x.photoUrl} />
                                        </ListItemAvatar>
                                        <ListItemText id={labelId} primary={x.name} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.onClose}>
                        Go back
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}