import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div className='p-4 space-y-4 flex flex-col max-w-[200px]'>
			<Button>Default</Button>
			<Button variant={'primary'}>Primary</Button>
			<Button variant={'primaryOutline'}>Outline</Button>
			<Button variant={'secondary'}>Secondary</Button>
			<Button variant={'secondaryOutline'}>Secondary Outline</Button>
			<Button variant={'danger'}>danger</Button>
			<Button variant={'dangerOutline'}>danger Outline</Button>
			<Button variant={'super'}>super</Button>
			<Button variant={'superOutline'}>super Outline</Button>
			<Button variant={'sidebar'}>sidebar</Button>
			<Button variant={'sidebarOutline'}>sidebar Outline</Button>
			<Button variant={'ghost'}>ghost</Button>
		</div>
	);
}
