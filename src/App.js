import React from "react";
import BucketList from "./BucketList";
import styled from "styled-components";
// import { useHistory } form "react-router";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [], //내용
        };
        this.text = React.createRef();
    }

    componentDidMount() {
    }
    addBucket = () => {
        console.log(this.text.current.value);
        const new_item = this.text.current.value;
        //...=> 스프레드 문법
        // [...this.state.list,넣고 싶었던 어떤 값 추가]

        this.setState({ list: [...this.state.list, new_item] });
    }

    render() {

        return (
            <AppWrap className="App">
                <Container>
                    <Title>내 일주일은?</Title>


                    <h3>수</h3>
                    <h3>목</h3>
                    <h3>금</h3>
                    <h3>토</h3>
                    <h3>일</h3>
                    <h3>월</h3>
                    <h3>화</h3>

                    <BucketList list={this.state.list} />
                </Container>


            </AppWrap>
        );
    }
}

const Container = styled.div`
background-color: #fff;
width: 50vw;
max-width: 350px;
margin: auto;
height: 80vh;
padding: 16px;
border: 1px solid #ddd;
border-radius: 5px;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
`;
const AppWrap = styled.div`
    background-color: #eee;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;


export default App;


