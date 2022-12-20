import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CCard,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol sm={6} lg={6} style={{ paddingTop: '15px', paddingBottom: '25px' }}>
        <CCard style={{ gap: '5px', border: 'none' }}>
          <div style={{ fontSize: '14px', lineHeight: '21px', fontWeight: 400 }}>
            Total BBTF Staked
          </div>
          <div>
            <strong style={{ color: '#0E1C40' }}>385,420.69</strong>
            <span style={{ color: '#20C997', marginLeft: '25px' }}>+1.25%</span>
            <span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0467 7.38002C11.92 7.38002 11.7933 7.33336 11.6933 7.23336L8 3.54002L4.30667 7.23336C4.11334 7.42669 3.79334 7.42669 3.6 7.23336C3.40667 7.04002 3.40667 6.72002 3.6 6.52669L7.64667 2.48002C7.84 2.28669 8.16 2.28669 8.35334 2.48002L12.4 6.52669C12.5933 6.72002 12.5933 7.04002 12.4 7.23336C12.3067 7.33336 12.1733 7.38002 12.0467 7.38002Z"
                  fill="#20C997"
                />
                <path
                  d="M8 14.6667C7.72667 14.6667 7.5 14.44 7.5 14.1667V2.94666C7.5 2.67332 7.72667 2.44666 8 2.44666C8.27333 2.44666 8.5 2.67332 8.5 2.94666V14.1667C8.5 14.44 8.27333 14.6667 8 14.6667Z"
                  fill="#20C997"
                />
              </svg>
            </span>
          </div>
          <div style={{ color: '#AAAAC7', fontSize: '12px' }}>Staking Period Began: 12/31/22</div>
        </CCard>
      </CCol>
      <CCol sm={6} lg={6} style={{ paddingTop: '15px', paddingBottom: '25px' }}>
        <CCard style={{ gap: '5px', border: 'none' }}>
          <div style={{ fontSize: '14px', lineHeight: '21px', fontWeight: 400 }}>
            Holders Staked
          </div>
          <div>
            <strong style={{ color: '#0E1C40' }}>4,209</strong>
            <span style={{ color: '#20C997', marginLeft: '25px' }}>+0.25%</span>
            <span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0467 7.38002C11.92 7.38002 11.7933 7.33336 11.6933 7.23336L8 3.54002L4.30667 7.23336C4.11334 7.42669 3.79334 7.42669 3.6 7.23336C3.40667 7.04002 3.40667 6.72002 3.6 6.52669L7.64667 2.48002C7.84 2.28669 8.16 2.28669 8.35334 2.48002L12.4 6.52669C12.5933 6.72002 12.5933 7.04002 12.4 7.23336C12.3067 7.33336 12.1733 7.38002 12.0467 7.38002Z"
                  fill="#20C997"
                />
                <path
                  d="M8 14.6667C7.72667 14.6667 7.5 14.44 7.5 14.1667V2.94666C7.5 2.67332 7.72667 2.44666 8 2.44666C8.27333 2.44666 8.5 2.67332 8.5 2.94666V14.1667C8.5 14.44 8.27333 14.6667 8 14.6667Z"
                  fill="#20C997"
                />
              </svg>
            </span>
          </div>
          <div style={{ color: '#AAAAC7', fontSize: '12px' }}>Compared to the previous 7 days</div>
        </CCard>
      </CCol>
      <CCol sm={6} lg={6} style={{ paddingTop: '15px', paddingBottom: '25px' }}>
        <CCard style={{ gap: '5px', border: 'none' }}>
          <div style={{ fontSize: '14px', lineHeight: '21px', fontWeight: 400 }}>
            Total Vested Rewards
          </div>
          <div>
            <strong style={{ color: '#0E1C40' }}>293,728,069</strong>
            <span style={{ color: '#20C997', marginLeft: '25px' }}>+0.5%</span>
            <span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0467 7.38002C11.92 7.38002 11.7933 7.33336 11.6933 7.23336L8 3.54002L4.30667 7.23336C4.11334 7.42669 3.79334 7.42669 3.6 7.23336C3.40667 7.04002 3.40667 6.72002 3.6 6.52669L7.64667 2.48002C7.84 2.28669 8.16 2.28669 8.35334 2.48002L12.4 6.52669C12.5933 6.72002 12.5933 7.04002 12.4 7.23336C12.3067 7.33336 12.1733 7.38002 12.0467 7.38002Z"
                  fill="#20C997"
                />
                <path
                  d="M8 14.6667C7.72667 14.6667 7.5 14.44 7.5 14.1667V2.94666C7.5 2.67332 7.72667 2.44666 8 2.44666C8.27333 2.44666 8.5 2.67332 8.5 2.94666V14.1667C8.5 14.44 8.27333 14.6667 8 14.6667Z"
                  fill="#20C997"
                />
              </svg>
            </span>
          </div>
          <div style={{ color: '#AAAAC7', fontSize: '12px' }}>Compared to the previous 7 days</div>
        </CCard>
      </CCol>
      <CCol sm={6} lg={6} style={{ paddingTop: '15px', paddingBottom: '25px' }}>
        <CCard style={{ gap: '5px', border: 'none' }}>
          <div style={{ fontSize: '14px', lineHeight: '21px', fontWeight: 400 }}>
            Earned Rewards
          </div>
          <div>
            <strong style={{ color: '#0E1C40' }}>5,753</strong>
          </div>
          <div style={{ color: '#AAAAC7', fontSize: '12px' }}>
            Total Number of BBTF Rewards Earned
          </div>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
