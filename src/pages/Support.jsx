const Support = () => {
  return (
    <div className="p-4 bg-gray-200">
      <h1 className="text-3xl font-bold">Support</h1>
      <p className="mt-4">
        If you need help with your order, please contact us at
        <a
          href="mailto:support@ecommerce.com"
          className="text-blue-500 underline"
        >
          support@ecommerce.com
        </a>
        . We will respond as soon as possible.
      </p>
      <p className="mt-4">
        You can also check our{" "}
        <a href="/faq" className="text-blue-500 underline">
          FAQ
        </a>{" "}
        page for answers to common questions.
      </p>
    </div>
  );
};

export default Support;
