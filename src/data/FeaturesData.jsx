import React from 'react';
import {GiBalaclava, GiWorld, GiWhiplash, GiTyre, GiTripleCorn, GiSnakeBite } from "react-icons/gi";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'æ',
		description: 'The four members that make up aespa',
		icon: iconStyle(GiBalaclava),
		imgClass: 'one',
	},
	{
		name: 'Black Mamba',
		description: 'An existence who interferes with SYNK between humans and æ',
		icon: iconStyle(GiSnakeBite),
		imgClass: 'two',
	},
	{
		name: 'KOSMO',
		description: 'a transcendent space beyond KWANGYA not even aespa have yet reached.',
		icon: iconStyle(GiTripleCorn),
		imgClass: 'three',
	},
	{
		name: 'ether',
		description: 'A subconscious world',
		icon: iconStyle(GiTyre),
		imgClass: 'four',
	},
	{
		name: 'FLAT',
		description: 'A world where æ live',
		icon: iconStyle(GiWhiplash),
		imgClass: 'five',
	},
	{
		name: 'KWANGYA',
		description:
			'An undefined, irregular, amorphous and infinite realm past FLAT which was created from ether.',
		icon: iconStyle(GiWorld),
		imgClass: 'six',
	},
];