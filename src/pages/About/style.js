import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .loading{
        text-align: center;
        color: #fff;
    }

    .box-information {
        padding: 10px;
        width: 300px;
        background-color: #fff;
        display: flex;
        flex-direction: column;

        h4 {
            letter-spacing: 2px;
        }
        span {
            letter-spacing: 1px;
            margin-right: 10px;
        }

        .box-pokemon-id {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .pokemon-name {
            letter-spacing: 2px;
        }
        .id {
            font-size: 1.2em;
            color: #000;
        }
        img {
            width: 60%;
            margin: 0 auto;
        }

        .box-line1, .box-line2, .box-line3 {
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .box-height, .box-weight {
            text-align: right;
            
            span {
                margin-right: 0;
            }
        }

    }

    button {
        width: 300px;
        margin-top: 20px;
        padding: 8px 25px;
        border: none;
        border-radius: 4px;
        color: #fff;
        background-color: #2f3559;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 2px;
        cursor: pointer;
        transition: 0.3s all;
    }
    button:active {
        transform: scale(0.95);
    }

    
`;