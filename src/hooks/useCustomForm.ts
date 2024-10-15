import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { ZodType } from "zod";

const useCustomForm = <T extends FieldValues>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: ZodType<any, any, any>
) => {
  const form = useForm<T>({
    resolver: zodResolver(schema),
  });

  return form;
};

export default useCustomForm;
