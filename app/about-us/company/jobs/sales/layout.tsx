export const metadata = {
    // description은 app/layout.tsx안에 있고
    // title은 app/(home)/page.tsx안에 있는데
    // metadata는 "중첩"이 아닌 "병합"되므로
    // 한 페이지에 title, description이 한번에 뜨게 된다.
    description: 'The best movies on the best framework',
}

export default function SalesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        $$$$$
        {children}
      </div>
    )
  }
  