import seoConfig from '@lib/Seo/seo.json'

type IProps = {
    page?: string
}

type SeoProps = {
    [key: string]: {
        title: string,
        titleTemplate: string,
        description: string,
        openGraph: any,
        twitter:  any,
    }
}

const useMetadata: any = (props: IProps) => {
    const seoPage = props?.page || 'default'
    const seo: SeoProps = seoConfig
    return seo[seoPage] || seo['default']
}

export default useMetadata