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
	nodeDescription: INodeTypeDescription;
};

const N8N_VETTED_NODE_TYPES_STAGING_URL = 'https://api-staging.n8n.io/api/community-nodes';
const N8N_VETTED_NODE_TYPES_PRODUCTION_URL = 'https://api.n8n.io/api/community-nodes';

export async function getCommunityNodeTypes(
	environment: 'staging' | 'production',
): Promise<StrapiCommunityNodeType[]> {
	const url = 'https://alive-direct-hippo.ngrok-free.app/api/community-nodes';
	return await paginatedRequest<StrapiCommunityNodeType>(url);
}
