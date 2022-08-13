import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: 50px auto 0 auto;

    h2 {
        color: #fff;
        text-align: center;
        margin-top: 50px;
    }
`;

export const Content = styled.div`
    width: 100%;

    .box-favorites {
        background-color: #fff;
        border-radius: 4px;
        padding: 10px;
        max-height: 68vh;
        overflow-y: scroll;
    }

    .box-pokemon {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;

        span {
            font-size: 1.2em;
            text-transform: capitalize;
        }

        .area-buttons {
            display: flex;
            align-items: center;

            a {
                padding: 5px 15px;
                text-decoration: none;
                background-color: #2f3559;
                color: #fff;
                font-weight: 600;
                letter-spacing: 2px;
                font-size: 0.9rem;
                border-radius: 4px;
                margin-right: 4px;
                transition: 0.3s all;
            }
            a:active {
                transform: scale(0.9);
            }

            button {
                border: none;
                background-color: #fff;
                cursor: pointer;
            }
        }
    }

    .box-pokemon:not(:first-child){
        border-top: 2px solid #ddd;
    }

    .btn-deleteAll {
        margin-top: 20px;
        padding: 8px 15px;
        background-color: #2f3559;
        color: #fff;
        font-weight: 600;
        letter-spacing: 2px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s all;
    }
    .btn-deleteAll:active {
        transform: scale(0.9);
    }

    
`;