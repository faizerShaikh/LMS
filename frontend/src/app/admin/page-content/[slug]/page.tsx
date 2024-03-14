
import { PageHeader } from 'components/layout/pageHeader';
import { MetaDataInitial } from 'initials';
import { PageContentInterface } from 'interfaces';
import React from 'react'
import PageContentForm from '../_components/pageContentForm';
import { getSinglePage } from 'lib';

type Props = {
    params:{
        slug:string;
    }
}

const SinglePage = async ({params: {slug}}: Props) => {
    const isUpdate = slug !== "add"
    let initialValues: PageContentInterface = {
        slug: "",
        name: "",
        title: "",
        titleDescription: "",
        pageDescription: "",
        coverImage: "",
        gallery: [],
        metaData: MetaDataInitial,
      };

      let data :PageContentInterface|null = null;
      if(isUpdate){
        data = await getSinglePage(slug)
        console.log(data)
        if(data){
            initialValues = {...initialValues, ...data}
        }
    }
  return (
    <>
    <PageHeader title={"Update Page Content "} className='m-2'></PageHeader>
    <PageContentForm   initialValues={initialValues} slug={slug} />
  </>
  )
}

export default SinglePage