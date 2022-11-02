export const ProductsHelp = (items: any) => {
  return (
    items?.length > 0 &&
    items.map((item: any) => {
      return {
        title: item.title,
        list: item.list.map((listItem: any) => listItem),
      }
    })
  )
}
