import { redirect } from 'next/navigation';
export default async function KalenderPage({ params }) {
    redirect('https://app.crescat.io/events');
}