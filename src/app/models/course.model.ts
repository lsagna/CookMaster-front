import { User } from "./user.model";

export interface Course {
	id: number,
	creator: User,
	type: CourseType,
	title: string,
	frontImage: string,
	content: Section[],
	createDate: Date
}

export interface Section {
	sectionTitle: string;
	sectionText: string;
	sectionImage: string;
}

export enum CourseType {
	TECHNIQUE = 'TECHNIQUE',
	RECEIPE = 'RECEIPE',
}