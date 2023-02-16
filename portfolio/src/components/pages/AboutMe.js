import React from "react";
import familyprofile from '../../images/familyprofile.jpg'
import autumnprofile from '../../images/autumnprofile.jpg'

export default function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <img alt="myself, my husband, and my son at a bowling alley" src={familyprofile} width="300"/>
            <p>
                Welcome to my Portfolio! My name is Autumn Legere, I am based out of Orem, UT, and for the past 3 years I have been a stay-at-home mom.
                I recently made the decision to branch out and make a place for myself in the world of web development. It has been an absolutely terrifying
                transition, but one that has filled my life with the sense of challenge and personal growth that I have been searching for.
            </p>
            <p>
                On a more professional note, I have embarked on this new career path with in hopes of creating websites and applications that help 
                others realize their business goals. In this day and age an attractive, user-friendly website often means the difference between a 
                customer choosing your service or that of your competitors. My goal is to help clients of all backgrounds achieve their business 
                goals by giving them a powerful online platform. I look forward to the challenges and experiences that lie ahead, and can't wait to 
                get started in the real world!
            </p>
            <img alt="me drinking italian soda in a restaurant" src={autumnprofile} width="300"/>
        </div>
        
    );
}