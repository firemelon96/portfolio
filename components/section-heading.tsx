interface SectionHeadingProps {
  title: string;
}
export const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2 className='text-3xl text-center font-medium capitalize mb-5'>
      {title}
    </h2>
  );
};
