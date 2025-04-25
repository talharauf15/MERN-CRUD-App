import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from './config/db.js';

dotenv.config();



connectDB();
