import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

const Posts = ({item}) => {
    console.log(item)
  return (
    <Container>
        <Imag src={item.featuredImage.url} alt="blogImage"/>
        <h1>{item.title}</h1>
        <div>
        <Image src={item.author.photo.url} alt="author"/>
        <p>
        <span>Published by {item.author.name} on  </span>  
        {moment(item.createdAt).format("MMM, DD, YYYY")}</p>
        </div>
        <h4>{item.excerpt}</h4>
    </Container>
  )
}

export default Posts;

const Container = styled.div`
    width: 30rem;
    background-color: white;
    padding: 0.5rem;
    border-radius: 5px;
    text-align: center;
    h1{
        font-size: 1.2rem;
        padding-top: 1rem;
        text-transform: capitalize;
    }
    div{
        padding: 1rem 0;
        font-size: 0.8rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        span{
            font-size: 0.7rem;
        }
    }
    h4{
        font-size: 0.8rem;
        font-weight: 400;
        padding:  0 1rem 1rem;
        text-align: left;
    }
`
const Imag = styled.img`
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 5px;
`
const Image = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    object-fit: cover;
    border-radius: 10px;
`

