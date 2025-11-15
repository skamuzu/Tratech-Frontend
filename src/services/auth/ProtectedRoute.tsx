import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

export default ProtectedRoute;