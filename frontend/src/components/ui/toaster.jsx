import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";
import { useToast } from "../../hooks/use-toast";
import { CheckCircle2, XCircle } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, className, ...props }) {
        return (
          <Toast 
            key={id} 
            variant={variant} 
            className={className}
            {...props}
          >
            <div className="grid gap-1 flex-1">
              {title && (
                <ToastTitle className={`flex items-center gap-2 ${
                  variant === "success" ? "text-green-900 dark:text-green-100" : ""
                }`}>
                  {variant === "success" && (
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  )}
                  {variant === "destructive" && (
                    <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  )}
                  <span>{title}</span>
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className={
                  variant === "success" ? "text-green-800 dark:text-green-200" : ""
                }>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
