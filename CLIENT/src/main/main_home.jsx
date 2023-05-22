import React, { useState, useEffect } from 'react';
import { Container, Grid, Modal, Button, Box, TextField} from "@mui/material"


import UserMainStyles from './user_main.module.css';
import MainHomeStyles from './main_home.module.css';


function MainHomeHeader() {
    const ModalComponent = () => {
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <div>
                <img id="addPost"
                    width="28px"
                    height="28px"
                    src="/assets/add_icon.svg"
                    alt="add_icon"
                    onClick={handleOpen}
                    style={{ cursor: 'pointer' }}
                />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: 650, height: 800, bgcolor: 'background.paper', boxShadow: 24, p: 4
                    }}>
                        <div className={UserMainStyles.modalHeader}>
                            <img
                                className={UserMainStyles.modalClose}
                                width="22px"
                                height="22px"
                                src="./assets/arrow_back_icon.svg"
                                alt="close_icon_logo"
                            />
                            <h2 className={UserMainStyles.modalTitle}>게시물 올리기</h2>
                        </div>
                        <div className={UserMainStyles.modalMain}>
                            <div className={UserMainStyles.modalUploadBackground}>
                                <img
                                    className={UserMainStyles.modalUploadFile}
                                    src="./assets/upload_icon.png"
                                    width="180px"
                                    height="200px"
                                    alt="upload_icon" />
                            </div>
                            <div className={UserMainStyles.modalUploadWrite}>
                                <input placeHolder={'문구입력...'} />
                            </div>
                            <Button variant="contained" style={{ width: '650px', backgroundColor: '#FFD4D4' }}> 공유하기 </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        );
    };

    return (
        <>
            <header className={UserMainStyles.header}>
                <div className={UserMainStyles.headerContainer}>
                    <div className={UserMainStyles.headerLogo}>
                        <img
                            width="108px"
                            height="50px"
                            src="/assets/bunny_talk_logo.png"
                            alt="bunny_talk_logo"
                        />
                    </div>
                    <div className={UserMainStyles.headerButtons}>
                        <img
                            width="30px"
                            height="30px"
                            src="/assets/home_icon.svg"
                            alt="home_icon"
                        />
                        <img
                            width="28px"
                            height="30px"
                            src="/assets/chat_icon.svg"
                            alt="send_icon"
                        />
                        <ModalComponent />
                        <img
                            width="28px"
                            height="28px"
                            src="/assets/favorite_icon.svg"
                            alt="favorite_icon"
                        />
                        <img
                            width="28px"
                            height="28px"
                            src="/assets/setting_icon.svg"
                            alt="setting_icon"
                        />
                    </div>
                </div>
            </header>

        </>

    )
}

function MainHomeVisitorBook() {
    function Visitor() {
        return (
            <>
                <div className={MainHomeStyles.visitLog}>
                    <div>
                        <img
                            width="150px"
                            height="150px"
                            src="/assets/chae_icon.png"
                            alt="visitor_icon"
                            style={{ cursor: 'pointer', borderRadius: "150px" }}
                        />
                    </div>
                    <div className={MainHomeStyles.visitor}>
                        <div>
                            닉네임 자리
                        </div>
                        <div>
                            바위너구리 너무 귀엽고 땃쥐는 말할 것도 없고 곰고양이도 엄청 귀여움.
                            회색담비는 뭐임? 그냥 키우고 싶다. ㄹㅇㅋㅋ
                            참고로 글자수 제한은 140자임
                        </div>
                        <div>
                            작성일 자리
                        </div>


                    </div>
                    <div className={MainHomeStyles.visitorButton}>
                        <img
                            width="30px"
                            height="30px"
                            src="/assets/visitor_user_button.svg"
                            alt="visitor_user_button"
                            style={{ cursor: 'pointer' }}
                        />
                        <img
                            width="30px"
                            height="30px"
                            src="/assets/visitor_chat_button.svg"
                            alt="visitor_chat_button"
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="뉴 버니 톡">
                <h1 style={{ textAlign: "center", color: "#FB7C7C" }}>New Bunny Talk</h1>
            </div>
            <Visitor />
            <div className={MainHomeStyles.chatAndButton}>
                <TextField type="text" style={{backgroundColor:"#FFF2F2", border : "1px", width : "900px"}} inputProps={{maxLength:140}}/>
                <Button variant="contained" style={{ backgroundColor: "#FB7C7C" }} >등록</Button>
            </div>
        </div>

    )
}


export default function MainHome() {

    return (
        <>
            <MainHomeHeader />
            <MainHomeVisitorBook />

        </>
    )
}