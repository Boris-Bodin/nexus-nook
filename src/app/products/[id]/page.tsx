import DetailProductComponent from '@/features/products/components/detail.component';

export default function Page({params}: {params: {id: string}}) {
    return <DetailProductComponent id={+params.id} />;
}
