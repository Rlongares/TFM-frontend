  /**
 * Copyright 2021 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from "react";
import {
  createStyles,
  makeStyles,
  PageHeader,
  LinkButton,
} from "@inrupt/prism-react-components";
import { useBem } from "@solid/lit-prism-patterns";
import Link from "next/link";


import { useSession, LogoutButton } from "@inrupt/solid-ui-react";
import LoginForm from "../loginForm";
import styles from "./styles";
import config from "../../config";
import theme from "../../src/theme";

const CONFIG = config();

const useStyles = makeStyles((theme) => createStyles(styles(theme)));

export const TESTCAFE_ID_HEADER_LOGO = "header-banner-logo";

export default function Header() {
  const { session, sessionRequestInProgress } = useSession();
  const bem = useBem(useStyles());
  const classes = useStyles();
  const { webId } = session.info;




  return (
    <header className={bem("header-banner")}>
      <p style={ {"backgroundColor": '#ffffff'} }  >
    {CONFIG.demoTitle}  {CONFIG.demoDescription}
    </p>
      <div className={bem("header-banner__main-nav")} />

      { session.info.isLoggedIn &&  (
      <p>Logged as: {webId}</p>
      )}
      <div className={bem("user-menu")}>
        {!sessionRequestInProgress && session.info.isLoggedIn &&  (
          <LogoutButton
            onError={console.error}
            onLogout={() => window.location.reload()}
          >
            <LinkButton
              variant="small"
              className={bem("user-menu__list-item-trigger")}
            >
              Log Out
            </LinkButton>
          </LogoutButton>

      )}

        {!sessionRequestInProgress && !session.info.isLoggedIn && <LoginForm />}
      </div>
    </header>
  );
}
