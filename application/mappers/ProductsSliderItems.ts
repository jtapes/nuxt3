export const ProductsSliderItems = (items: any) => {
  const runtimeConfig = useRuntimeConfig()

  return (
    items?.length > 0 &&
    items.map((item: any) => ({
      title: item.title,
      descriptions: item.descriptions,
      file: {
        src:
          (process.env.BASE_URL || runtimeConfig.public.BASE_URL) +
          item.file?.src,
        alt:
          (process.env.BASE_URL || runtimeConfig.public.BASE_URL) +
          item.file?.description,
      },
      image: {
        x1:
          (process.env.BASE_URL || runtimeConfig.public.BASE_URL) +
          item.preview_picture?.src,
        x2:
          (process.env.BASE_URL || runtimeConfig.public.BASE_URL) +
          item.preview_picture?.src2x,
        alt:
          (process.env.BASE_URL || runtimeConfig.public.BASE_URL) +
          item.preview_picture?.description,
      },
    }))
  )
}
