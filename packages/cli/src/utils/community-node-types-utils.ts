import type { INodeTypeDescription } from 'n8n-workflow';

import { paginatedRequest } from './strapi-utils';

export type StrapiCommunityNodeType = {
	authorGithubUrl: string;
	authorName: string;
	checksum: string;
	description: string;
	displayName: string;
	name: string;
	numberOfStars: number;
	numberOfDownloads: number;
	packageName: string;
	createdAt: string;
	updatedAt: string;
	npmVersion: string;
	isOfficialNode: boolean;
	companyName?: string;
	nodeVersions: [
		{
			checksum: string;
			npmVersion: string;
		},
	];
	nodeDescription: INodeTypeDescription;
};

export async function getCommunityNodeTypes(
	environment: 'staging' | 'production',
): Promise<StrapiCommunityNodeType[]> {
	const url = 'https://alive-direct-hippo.ngrok-free.app/api/community-nodes';
	return await paginatedRequest<StrapiCommunityNodeType>(url);
}
