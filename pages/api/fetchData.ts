import { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import {Browser} from 'puppeteer'

export default async function getData(req:NextApiRequest, res:NextApiResponse){
        const url= 'https://books.toscrape.com/'
        const browser: Browser = await puppeteer.launch();
        
        const page = await browser.newPage();
        await page.goto(url);

}