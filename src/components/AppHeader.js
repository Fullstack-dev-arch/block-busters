import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CInputGroupText,
  CFormInput,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import logo from 'src/assets/brand/Blockbusters-Logo.png'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4 container-lg">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          {/* <CIcon icon={cilMenu} size="lg" /> */}
          <span>{sidebarShow ? '<' : '>'}</span>
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CImage className="sidebar-brand-full" src={logo}></CImage>
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            {/* <CNavLink to="/dashboard" component={NavLink}>
            </CNavLink> */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
              }}
            >
              <div
                style={{ fontSize: '28px', fontWeight: 400, lineHeight: '42px', color: '#5A5881' }}
              >
                Staking Dashboard
              </div>
            </div>
          </CNavItem>
          <CNavItem>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                height: '100%',
              }}
            >
              {/* <CNavLink href="#">Users</CNavLink> */}
            </div>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <span
                style={{
                  zIndex: 100,
                  position: 'relative',
                  left: '30px',
                  top: '-2px',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 15C11.9779 15 15 11.9779 15 8.25C15 4.52208 11.9779 1.5 8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.9779 4.52208 15 8.25 15Z"
                    stroke="#AAAAC7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.1974 15.5174C14.5949 16.7174 15.5024 16.8374 16.1999 15.7874C16.8374 14.8274 16.4174 14.0399 15.2624 14.0399C14.4074 14.0324 13.9274 14.6999 14.1974 15.5174Z"
                    stroke="#AAAAC7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <CFormInput
                className="header-search"
                type="search"
                placeholder="Search 0x Address"
                style={{
                  fontSize: '12px',
                  lineHeight: '18px',
                  border: 'none',
                  display: 'block',
                  padding: '9px 4px 9px 40px',
                }}
              ></CFormInput>
            </div>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.02 20.53C9.68999 20.53 7.35999 20.16 5.14999 19.42C4.30999 19.13 3.66999 18.54 3.38999 17.77C3.09999 17 3.19999 16.15 3.65999 15.39L4.80999 13.48C5.04999 13.08 5.26999 12.28 5.26999 11.81V8.92001C5.26999 5.20001 8.29999 2.17001 12.02 2.17001C15.74 2.17001 18.77 5.20001 18.77 8.92001V11.81C18.77 12.27 18.99 13.08 19.23 13.49L20.37 15.39C20.8 16.11 20.88 16.98 20.59 17.77C20.3 18.56 19.67 19.16 18.88 19.42C16.68 20.16 14.35 20.53 12.02 20.53ZM12.02 3.67001C9.12999 3.67001 6.76999 6.02001 6.76999 8.92001V11.81C6.76999 12.54 6.46999 13.62 6.09999 14.25L4.94999 16.16C4.72999 16.53 4.66999 16.92 4.79999 17.25C4.91999 17.59 5.21999 17.85 5.62999 17.99C9.80999 19.39 14.24 19.39 18.42 17.99C18.78 17.87 19.06 17.6 19.19 17.24C19.32 16.88 19.29 16.49 19.09 16.16L17.94 14.25C17.56 13.6 17.27 12.53 17.27 11.8V8.92001C17.27 6.02001 14.92 3.67001 12.02 3.67001Z"
                  fill="#5A5881"
                />
                <path
                  d="M13.88 3.93999C13.81 3.93999 13.74 3.92999 13.67 3.90999C13.38 3.82999 13.1 3.76999 12.83 3.72999C11.98 3.61999 11.16 3.67999 10.39 3.90999C10.11 3.99999 9.80999 3.90999 9.61999 3.69999C9.42999 3.48999 9.36999 3.18999 9.47999 2.91999C9.88999 1.86999 10.89 1.17999 12.03 1.17999C13.17 1.17999 14.17 1.85999 14.58 2.91999C14.68 3.18999 14.63 3.48999 14.44 3.69999C14.29 3.85999 14.08 3.93999 13.88 3.93999Z"
                  fill="#5A5881"
                />
                <path
                  d="M12.02 22.81C11.03 22.81 10.07 22.41 9.37002 21.71C8.67002 21.01 8.27002 20.05 8.27002 19.06H9.77002C9.77002 19.65 10.01 20.23 10.43 20.65C10.85 21.07 11.43 21.31 12.02 21.31C13.26 21.31 14.27 20.3 14.27 19.06H15.77C15.77 21.13 14.09 22.81 12.02 22.81Z"
                  fill="#5A5881"
                />
              </svg>
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
