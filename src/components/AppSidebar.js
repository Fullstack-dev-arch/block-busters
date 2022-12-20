import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CImage,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import logo from 'src/assets/brand/Blockbusters-Logo.png'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <CImage className="sidebar-brand-full" src={logo}></CImage>
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} /> */}
        {/* <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <SimpleBar>
        <div
          className="sidebar-footer-item"
          style={{
            paddingLeft: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            fontWeight: 500,
          }}
        >
          Connect Wallet
        </div>
        <div
          className="sidebar-footer-item"
          style={{
            paddingLeft: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            fontWeight: 400,
            fontSize: '13px',
            color: '#563BFF',
            marginBottom: '15px',
          }}
        >
          Import Your Wallet Info
        </div>
      </SimpleBar>
      <SimpleBar>
        <div
          className="sidebar-footer-item"
          style={{
            paddingLeft: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            marginBottom: '15px',
          }}
        >
          <CButton className="d-none d-lg-flex">
            Connect&nbsp;&nbsp;&nbsp;
            <span>
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_512)">
                  <path
                    d="M9 13.25C8.85594 13.25 8.71202 13.1952 8.60243 13.085L5.60248 10.085C5.38275 9.86528 5.38275 9.50905 5.60248 9.28918C5.8222 9.06946 6.17844 9.06946 6.3983 9.28918L9.00069 11.8917L11.6032 9.28918C11.8229 9.06946 12.1793 9.06946 12.399 9.28918C12.6188 9.50905 12.6188 9.86528 12.399 10.085L9.39894 13.085C9.28798 13.1952 9.14406 13.25 9 13.25V13.25Z"
                    fill="white"
                  />
                  <path
                    d="M15.9375 18.5H2.06255C0.924774 18.5 0 17.5752 0 16.4374V13.0624C0 12.7519 0.251999 12.4999 0.5625 12.4999C0.873001 12.4999 1.125 12.7519 1.125 13.0624V16.4374C1.125 16.9542 1.54578 17.375 2.06255 17.375H15.9375C16.4542 17.375 16.875 16.9542 16.875 16.4374V13.0624C16.875 12.7519 17.127 12.4999 17.4375 12.4999C17.748 12.4999 18 12.7519 18 13.0624V16.4374C18 17.5752 17.0752 18.5 15.9375 18.5V18.5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_512">
                    <rect width="18" height="18" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </CButton>
        </div>
      </SimpleBar>
      {/* <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      /> */}
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
